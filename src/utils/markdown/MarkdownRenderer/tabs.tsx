import * as React from "react";
import { useMarkdownRendererProps } from "./types";
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs";
import { ReactElement, useCallback } from "react";
import { useIsomorphicLayoutEffect } from "utils/index";
import { MarkdownDataContext } from "utils/markdown/MarkdownRenderer/data-context";

/**
 * @see https://github.com/reactjs/react-tabs for layout of "HTML" nodes
 */
const Tabs: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const tabsHeadingText = React.useMemo(() => {
    const childrenArr = React.Children.toArray(children);
    const tabList = childrenArr.filter(
      (child) => (child as ReactElement)?.type === ReactTabList
    )[0];
    // A list of Tabs
    const tabsCompList = (tabList as ReactElement).props.children;
    const tabTextArr = tabsCompList
      .filter((maybeTabComp: ReactElement) => {
        return maybeTabComp?.type === ReactTab;
      })
      .map((tabComp: ReactElement) => {
        return tabComp.props["data-tabname"];
      });
    return tabTextArr as string[];
  }, [children]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const { dispatch, state } = React.useContext(MarkdownDataContext);

  const matchTextToIndex = useCallback(
    (tabText: string) => {
      if (!tabsHeadingText?.length) {
        return -1;
      }
      const matchIndex = tabsHeadingText.findIndex(
        (headingText) => tabText === headingText
      );
      if (matchIndex === -1) return -1;
      return matchIndex;
    },
    [tabsHeadingText]
  );

  useIsomorphicLayoutEffect(() => {
    const selectedTextIdx = matchTextToIndex(state.selectedTabText);
    if (selectedTextIdx === -1) return;
    setSelectedIndex(selectedTextIdx);
  }, [state.selectedTabText]);

  const onSelect = React.useCallback(
    (index: number, _: number, event: Event) => {
      const target = event.target as HTMLElement;
      setSelectedIndex(index);
      dispatch({
        type: "SET_SELECTED_TAB_TEXT",
        payload: tabsHeadingText[index],
      });
      // Scroll onto screen in order to avoid jumping page locations
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center",
        });
      }, 0);
    },
    [dispatch, tabsHeadingText]
  );

  return (
    <ReactTabs selectedIndex={selectedIndex} onSelect={onSelect}>
      {children}
    </ReactTabs>
  );
};
Tabs.displayName = "Tabs";

export const getTabs = ({ serverPath }: useMarkdownRendererProps) => {
  return {
    tabs: Tabs,
    tab: ReactTab,
    ["tab-list"]: ReactTabList,
    ["tab-panel"]: ReactTabPanel,
  };
};

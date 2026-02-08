import Image from "next/image";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

const LEETCODE_USERNAME = "manavsingh758";
const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
const LEETCODE_GRAPH_URL = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?ext=heatmap`;

export function LeetCodeGraph() {
  return (
    <Panel id="leetcode-activity">
      <PanelHeader className="flex items-center justify-between gap-3 py-4">
        <PanelTitle>LeetCode Activity</PanelTitle>

        <a
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          href={LEETCODE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View LeetCode profile
        </a>
      </PanelHeader>

      <PanelContent>
        <Image
          className="w-full rounded-xl border border-edge"
          src={LEETCODE_GRAPH_URL}
          alt="LeetCode submission activity graph"
          width={900}
          height={260}
          unoptimized
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Updated automatically from LeetCode submissions.
        </p>
      </PanelContent>
    </Panel>
  );
}

import React from "react";
import { render } from "@testing-library/react";

import { WithPinnedTasks } from "./TaskList.stories";

test("renders pinned tasks at the start of the list", () => {
  const { getAllByRole } = render(
    <WithPinnedTasks {...WithPinnedTasks.args} />
  );
  const [firstTask] = getAllByRole("textbox");
  expect(firstTask).toHaveValue(
    WithPinnedTasks.args.tasks[WithPinnedTasks.args.tasks.length - 1].title
  );
});

import { RenderResult, renderHook } from "@testing-library/react-hooks";
import { UseBlockDateReturn } from "src/types";
import { useBlockDate } from "../useBlockDate";

const fakeBlockTimestap = 1637509968;
const expectedBlockDate = new Date(1637509968 * 1000);
const mockedCurrentDate = new Date(2021, 10, 22);

describe("useBlockDate", () => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(mockedCurrentDate);

  let hookResult: RenderResult<UseBlockDateReturn>;

  beforeEach(() => {
    const { result } = renderHook(() => useBlockDate(fakeBlockTimestap));
    hookResult = result;
  });

  it("retrieves the correct timeAgo for a block timestamp provided", () => {
    const expectedTimeAgo = Math.round(
      (mockedCurrentDate.getTime() - expectedBlockDate.getTime()) / 1000
    );
    const retrievedTimeAgo = hookResult.current.timeAgo;

    expect(retrievedTimeAgo).toBe(expectedTimeAgo);
  });

  it("retrieves the correct date when calling getBlockDate", () => {
    const retrievedBlockDate = hookResult.current.getBlockDate();

    expect(retrievedBlockDate).toBe(String(expectedBlockDate));
  });
});

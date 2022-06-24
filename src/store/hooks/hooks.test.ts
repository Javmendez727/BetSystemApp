import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("App hooks", () => {
  it("should call 'useDispatch' redux function if 'useAppDispatch' is called", () => {
    const useDispatchMock = jest.fn();

    (useDispatch as jest.Mock).mockImplementationOnce(useDispatchMock);

    useAppDispatch();

    expect(useDispatchMock).toHaveBeenCalled();
  });

  it("should call 'useSelector' redux function if 'useAppSelector' is called", () => {
    const useSelectorMock = jest.fn();

    (useSelector as jest.Mock).mockImplementationOnce(useSelectorMock);

    useAppSelector((state) => state);

    expect(useSelectorMock).toHaveBeenCalled();
  });
});

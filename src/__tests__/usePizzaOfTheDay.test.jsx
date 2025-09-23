import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "./../usePizzaOfTheDay.js";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

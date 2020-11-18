// setupTests.js 파일은 테스트 매 실행 전에 한번씩 실행하는 것으로 생각하면 된다.

import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });
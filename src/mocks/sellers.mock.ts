import Chance from "chance";

const chance = new Chance();
const TOTAL_SELLERS = 9;

const sellers = new Array(TOTAL_SELLERS).fill({}).map((_, index) => ({
  id: index + 1,
  name: chance.name(),
  indentification: chance.guid(),
  status: "active",
}));

export default sellers;

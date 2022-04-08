import { Users } from "../../util/user";
export default (req, res) => {
  const { q } = req.query;
  if (q) {
    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };

    res.status(200).json(search(Users).slice(0, 10));
  } else {
    res.status(200).json(Users.slice(0, 10));
  }
};

const getDate = (param) => {
  try {
    const date =
      param && typeof param === "string" && param !== "year"
        ? new Date(param)
        : new Date();
    if (param === "year") return date.getFullYear();
    else if (
      !date.getSeconds() ||
      !date.getMinutes() ||
      !date.getHours() ||
      !date.getDate() ||
      !date.getMonth() ||
      !date.getYear()
    )
      throw Error();
    const second =
      date.getSeconds() < 10
        ? 0 + date.getSeconds().toString()
        : date.getSeconds();
    const minute =
      date.getMinutes() < 10
        ? 0 + date.getMinutes().toString()
        : date.getMinutes();
    const hour =
      date.getHours() > 12
        ? date.getHours() - 12 + ".. PM"
        : date.getHours() === 0
        ? "12.. AM"
        : date.getHours() > 0 && date.getHours() < 10
        ? 0 + date.getHours().toString() + "..AM"
        : date.getHours() + ".. AM";
    const day =
      date.getDate().toString().length === 1
        ? 0 + date.getDate().toString()
        : date.getDate();
    const month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
    ][date.getMonth()];
    const year = date.getFullYear();
    const fullDate = `${month} ${day}, ${year} ${hour.replace(
      /\.+/,
      `:${minute}:${second}`
    )}`;
    return fullDate;
  } catch {
    console.log(
      "Error: Did not recieve expected paramters when getDate() was invoked"
    );
  }
};
export default getDate;

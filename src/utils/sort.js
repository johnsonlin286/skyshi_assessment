export default function sortTodos(name, data) {
  switch (name) {
    case "newest":
      return data.sort((a, b) => b.id - a.id);
    case "oldest":
      return data.sort((a, b) => a.id - b.id);
    case "asc":
      return data.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    case "dsc":
      return data.sort((a, b) =>
        b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1
      );
    case "unfin":
      return data.sort((a, b) => b.is_active - a.is_active);
    default:
      return data.sort((a, b) => a.id - b.id);
  }
}

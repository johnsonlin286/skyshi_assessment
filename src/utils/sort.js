export default function sortTodos(name, data) {
  switch (name) {
    case "newest":
      return data.sort((a, b) => new Date(a.id) - new Date(b.id));
    case "oldest":
      return data.sort((a, b) => new Date(b.id) - new Date(a.id));
    case "asc":
      return data.sort((a, b) => b.title.localeCompare(a.title));
    case "dsc":
      return data.sort((a, b) => a.title.localeCompare(b.title));
    case "unfin":
      return data.sort((a, b) => b.is_active - a.is_active);
    default:
      return data;
  }
}

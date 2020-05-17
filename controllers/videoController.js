export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const search = (req, res) => res.send("search", { pageTitle: search });
export const videos = (req, res) => res.send("videos", { pageTitle: "videos" });
export const upload = (req, res) => res.send("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) =>
  res.send("videoDetail", { pageTitle: "video detail" });
export const editVideo = (req, res) =>
  res.send("editVideo", { pageTitle: "edit video" });
export const deleteVideo = (req, res) =>
  res.send("deleteVideo", { pageTitle: "delete video" });

import routes from "../routes.js";

export const home = (req, res) =>
  res.render("home", { pageTitle: "home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingFor },
  } = req;
  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;

  //TODO: upload and save video
  res.redirect(routes.videoDetail(32412));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });

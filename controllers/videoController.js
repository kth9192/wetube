import { videos } from "../db.js";

export const home = (req, res) =>
  res.render("home", { pageTitle: "home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingFor },
  } = req;
  res.render("search", { pageTitle: "Search", searchingFor });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });

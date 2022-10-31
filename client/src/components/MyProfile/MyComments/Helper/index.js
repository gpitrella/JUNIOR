export const FindUserProject = (comment, allProjects) => {
  return allProjects.find((project) => project._id === comment.idProject);
};

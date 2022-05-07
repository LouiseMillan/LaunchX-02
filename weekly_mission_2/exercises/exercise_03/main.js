import PullRequest from "./pull_request.js";
import Issue from "./issue.js";
import Repo from "./repo.js";

const repositorio = new Repo("weekly_mission_2", "Luis Milán", "JS");
console.log(repositorio.generalInfo);
console.log("Issues totales: " + repositorio.totalIssues);
const pull = new PullRequest("Versión Beta del proyecto", "Juan Charrasqueado", "main", repositorio);
console.log(pull.titleAndAuthor);
const issue = new Issue("No tiene todos los getter y setter.", "Armando Lios", repositorio);
console.log(issue.generalInfo);

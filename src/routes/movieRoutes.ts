import { Router } from "express";
import MovieService from "../service/movieService";
import MovieController from "../controller/movieController";


const movieService = new MovieService();
const movieController = new MovieController(movieService);

const movieRoute = Router();

movieRoute.get('/', (req, res)=> movieController.findAll(req, res));

export default movieRoute;
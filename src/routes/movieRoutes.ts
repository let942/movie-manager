import { Router } from "express";
import MovieService from "../service/movieService";
import MovieController from "../controller/movieController";


const movieService = new MovieService();
const movieController = new MovieController(movieService);

const movieRoute = Router();

movieRoute.get('/', (req, res)=> movieController.findAll(req, res));
movieRoute.post('/', (req, res)=> movieController.create(req, res));
movieRoute.delete('/', (req, res)=> movieController.delete(req, res));
movieRoute.get('/:id', (req, res)=> movieController.findById(req, res));
movieRoute.put('/:id', (req, res)=> movieController.update(req, res));


export default movieRoute;
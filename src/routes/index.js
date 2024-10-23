import { Router } from "express";

const router = Router()

router.get("/",(req,res) => res.render("main", { title: "primera pagina con node"}))

router.get("/index",(req,res) => res.render("index", { title: "Menu"}))

router.get("/contact",(req,res) => res.render("contact", { title: "Contactanos"}))

router.get("/index",(req,res) => res.render("/", { title: "primera pagina con node"}))




export default router
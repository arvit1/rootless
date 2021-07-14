import {Blueprint} from "./blueprint";
import {Course} from "./course";
import {Expert} from "./expert";
import {Forum} from "./forum";
import {Blog} from "./blog";
import {Event} from "./event";

export interface Search {
    size: number;
    courses: Course[];
    blueprints: Blueprint[];
    events: Event[];
    forums: Forum[];
    experts: Expert[];
    blogs: Blog[];
}

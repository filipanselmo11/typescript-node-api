"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ educator, name, duration = 11 }) {
        console.log(duration, educator, name);
    }
}
exports.default = new CreateCourseService();

/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number; // Atributo Opcional
    educator: string;
}

class CreateCourseService {
    execute({ educator, name, duration = 11 }: Course) {
        console.log(duration, educator, name);
    }
}

export default new CreateCourseService();
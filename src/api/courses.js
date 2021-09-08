import restActions from '.';

export function getCoursesByQuery({ course, gpa, greScore, country }) {
	return restActions.GET(`/course/searchCourse?course=${course}&gpa=${gpa}&greScore=${greScore}&country=${country}`);
}

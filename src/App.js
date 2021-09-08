import { useState,useEffect } from 'react';
import './App.css';
import { getCoursesByQuery } from './api/courses';

function App() {
  const [data, setData] = useState([])
  const [formState, setFormState] = useState({course:''})

  useEffect(() => {
		document.querySelector('title').innerText = 'Search Courses';
		getCourses();
		// eslint-disable-next-line
	}, []);

	async function getCourses() {
    try {
			const res = await getCoursesByQuery(formState);
			setData(res.data);
      console.log("Searching for universitites")
		} catch (err) {
			console.error(err);
			alert(err)
		}
  }
  
  const handleInputChange = (evt) => {
    const name=evt.target.name
		const value=evt.target.value
    setFormState(state=>{
      state[name] = value;
      return state
    })
  }


  return (
   <div className='App'>
			<header className='App-header'>
				<div className='header-name'>
					<span>ACADEMY</span>
				</div>
				<div className='header-search'>
          <input placeholder='Country' name='country' onChange={handleInputChange}  required />
          <input placeholder='GRE Score' name='greScore' onChange={handleInputChange}  required />
					<input placeholder='GPA' name='gpa' onChange={handleInputChange}  required />
          <input placeholder='Course Name' name='course' onChange={handleInputChange} required />
          <button type='button' onClick={getCourses}>Search</button>
				</div>
			</header>
			<main>
		
					<section className='table-section table-responsive'>
					
						<table>
							<thead>
								<tr>
									<th>University Name</th>
									<th>Country</th>
									<th>Course Name</th>
									<th>Teacher Name</th>
									<th>Minimum GPA</th>
									<th>Minimum GRE Score</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item) => {
									return (
										<tr key={item._id}>
											<td>{item.universityName}</td>
											<td>{item.country}</td>
											<td>{item.courseName}</td>
											<td>{item.teacherName}</td>
											<td>{item.minGpa}</td>
											<td>{item.minGreScore}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</section>

			</main>
		</div>
  );
}

export default App;

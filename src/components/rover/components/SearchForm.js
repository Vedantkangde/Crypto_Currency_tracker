import * as React from "react"
import { Button, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Tooltip } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { fetchPhotos } from "../slices/photos"

export const SearchForm = ({ rover, manifest, sol, earthDate, camera, setSol, setEarthDate, }) => {
	
	const [activatedInput, setActivatedInput] = React.useState("sol")

	
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(fetchPhotos(rover, sol, earthDate, camera))
	}

	return (
		<div className='card card-search'>
			<h2>Search photos</h2>
			
			<div className='inputs'>
				{/* Radio Buttos */}
				<RadioGroup
					defaultValue={activatedInput}
					aria-label='rover'
					name='rover'
					onChange={(e) => setActivatedInput(e.target.value)}
				>
					<FormControlLabel value='sol' control={<Radio />} label='Sol' />
				</RadioGroup>

				{/* Sol */}
				<form className='search-form' onSubmit={handleSubmit}>
					{activatedInput === "sol" && (
						<Tooltip
							className='formElement'
							title="Martian rotation or day on which the photos were taken, counting up from the rover's landing date."
						>
							<TextField 
								id='sol'
								type='number'
								placeholder="Sol date"
								value={sol}
								onChange={(e) => {
									setSol(e.target.value)
									setEarthDate("")
								}}
								InputProps={{ inputProps: { min: 0, max: manifest.max_sol } }}
								InputLabelProps={{ shrink: true }}
								fullWidth
								required
								style={{ background:"#004c39" ,border:"1px solid black ", color:"black"}}
							/>
						</Tooltip>
					)}

				
					{/* Submit */}
					<Button variant='contained' color='primary' type='submit' children='Search' />
				</form>
			</div>
		</div>
	)
}

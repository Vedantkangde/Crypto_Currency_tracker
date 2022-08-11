import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { SearchForm } from "./components/SearchForm"
import { GridGallery } from "./components/GridGallery"
import { Manifest } from "./components/Manifest"
import { fetchManifest, manifestSelector } from "./slices/manifest"
import { fetchLatestPhotos, photosSelector } from "./slices/photos"
import { SelectRoverForm } from "./components/SelectRoverForm"
import { StarContainer, StarWrapper, StarCard, StarH1,StarContainer1 } from './starElements'

const Rover = () => {
    const [rover, setRover] = React.useState("curiosity")
	const [sol, setSol] = React.useState("")
	const [earthDate, setEarthDate] = React.useState("")
	const [camera, setCamera] = React.useState("")
	const [availableCameras, setAvailableCameras] = React.useState([])

	
	const dispatch = useDispatch()
	const { photos, loading, hasErrors } = useSelector(photosSelector)
	const { manifest } = useSelector(manifestSelector)

	React.useEffect(() => {
		
		dispatch(fetchManifest(rover))
		
		dispatch(fetchLatestPhotos(rover))
		
		let availableCameras = []
		if (rover === "curiosity") {
			availableCameras = ["", "FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]
		} else {
			availableCameras = ["", "FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"]
		}
		setAvailableCameras(availableCameras)
	}, [dispatch, rover])


	const normalizePhotos = () => {
		let filteredPhotos = []
		photos.forEach((photo) => {
			filteredPhotos.push({
				src: photo.img_src,
				thumbnail: photo.img_src,
				thumbnailWidth: 1000,
				thumbnailHeight: 1000,
				camera: photo.camera.name,
			})
		})
		return filteredPhotos
	}

	return (
        
		<>
			<StarContainer>
				<center><StarH1>Mars Rover</StarH1></center>
			
			    <StarWrapper>
                    <StarCard>
				
				<SelectRoverForm rover={rover} setRover={setRover} setSol={setSol} setEarthDate={setEarthDate} />
                </StarCard>
                
                <StarCard>
				<Manifest />
                </StarCard>
				
                <StarCard>
				<SearchForm
					rover={rover}
					manifest={manifest}
					sol={sol}
					earthDate={earthDate}
					setEarthDate={setEarthDate}
					camera={camera}
					setSol={setSol}
				/>
                </StarCard>
			 </StarWrapper>
			     
                 <StarContainer1>
			
				
				{photos.length > 0 && <GridGallery photos={normalizePhotos()} />}
				{photos.length === 0 && !loading && !hasErrors && (
					<div className='emptyState'>There are no photos with the specified data</div>
				)}
                </StarContainer1>
			</StarContainer>
		</>
    )
}

export default Rover

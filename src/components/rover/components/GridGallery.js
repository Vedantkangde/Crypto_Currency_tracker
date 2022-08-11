import Gallery from "react-grid-gallery"
import * as React from "react"
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from "react-redux"
import { photosSelector } from "../slices/photos"
import { CircularProgress } from "@material-ui/core"
import { StarCard, StarWrapper } from "../starElements";
import "./gridgallery.css"
export const GridGallery = ({ photos }) => {
	const [currentPage, setCurrentPage] = React.useState(1)
	const { loading, hasErrors } = useSelector(photosSelector)


	const photosPerPage = 20
	const indexOfLastPhoto = currentPage * photosPerPage
	const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
	const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)
	const totalPages = Math.ceil(Number(photos.length) / photosPerPage)

	const handleChange = (event, value) => setCurrentPage(value)

	return (
		<div className='gallery'>
			
			<center><h1>IMAGES</h1></center>
			{loading && <CircularProgress />}
			{hasErrors && <div className='card card-manifest'>An error has occured. Please reload.</div>}
			{photos && !loading && (
				
			
				<Gallery
					margin={20}
					images={currentPhotos}
					enableImageSelection={false}
					backdropClosesModal={true}
					showCloseButton={false}
					showImageCount={false}
				/>
				
			)}
			{totalPages !== 1 && (
				<div className='pagination'>
					
				</div>
			)}
		</div>
	)
}

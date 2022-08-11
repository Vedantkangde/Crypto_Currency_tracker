import { CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux"
import { manifestSelector } from "../slices/manifest"

export const Manifest = () => {
	const { manifest, loading, hasErrors } = useSelector(manifestSelector)

	return (
		<div>
			<h2>Mission Report</h2>
			
			{loading && <CircularProgress />}
			{hasErrors && <div>An error has occured. Please reload.</div>}
			{manifest && !loading && (
				<ul>
					<h2><b>Rover name:</b> {manifest.name}</h2>
					<h2><li><b>Launch Date:</b> {manifest.launch_date}</li></h2>
					<h2><li><b>Landing Date:</b> {manifest.landing_date}</li></h2>
					<h2><li><b>Max Sol:</b> {manifest.max_sol}</li></h2>
				</ul>
			)}
		</div>
	)
}

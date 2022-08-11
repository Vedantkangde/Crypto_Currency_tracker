import axios from "../api"
import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
	loading: false,
	hasErrors: false,
	manifest: {},
}

const manifestSlice = createSlice({
	name: "manifest",
	initialState,
	reducers: {
		getManifest: (state) => {
			state.loading = true
		},
		getManifestSuccess: (state, { payload }) => {
			state.manifest = payload
			state.loading = false
			state.hasErrors = false
		},
		getManifestFailure: (state) => {
			state.loading = false
			state.hasErrors = true
		},
	},
})


export const { getManifest, getManifestSuccess, getManifestFailure } = manifestSlice.actions

export default manifestSlice.reducer

export const manifestSelector = (state) => state.manifest


export const fetchManifest = (rover) => async (dispatch) => {
	dispatch(getManifest())

	try {
		const response = await axios.get(`manifests/${rover}`)
		dispatch(getManifestSuccess(response.data.photo_manifest))
	} catch (error) {
		dispatch(getManifestFailure())
	}
}

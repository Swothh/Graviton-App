import * as path from 'path'
import StaticConfig from 'StaticConfig'
import normalizeDir from '../../../utils/directory_normalizer'

const rimraf = window.require('rimraf')

function uninstallPlugin({ PATH }) {
	return new Promise((resolve, reject) => {
		rimraf(PATH, () => {
			resolve()
		})
	})
}

export default uninstallPlugin

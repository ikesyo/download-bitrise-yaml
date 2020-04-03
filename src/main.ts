import * as core from '@actions/core'
import {downloadBitriseYaml} from './download_bitrise_yaml'

async function run(): Promise<void> {
  try {
    const appSlug = core.getInput('appSlug', {required: true})
    core.debug(`appSlug: ${appSlug}`)

    const outputPath = core.getInput('outputPath')

    const bitriseToken = core.getInput('bitriseToken', {required: true})
    core.setSecret(bitriseToken)

    await downloadBitriseYaml(appSlug, outputPath, bitriseToken)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

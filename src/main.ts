import * as core from '@actions/core'
import {downloadBitriseYaml} from './download_bitrise_yaml'

async function run(): Promise<void> {
  try {
    const appSlug = core.getInput('app_slug', {required: true})
    core.debug(`app_slug: ${appSlug}`)

    const outputPath = core.getInput('output_path')

    const bitriseToken = core.getInput('bitrise_token', {required: true})
    core.setSecret(bitriseToken)

    await downloadBitriseYaml(appSlug, outputPath, bitriseToken)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

import * as http from '@actions/http-client'
import * as fs from 'fs'

export async function downloadBitriseYaml(
  appSlug: string,
  outputPath: string,
  bitriseToken: string
): Promise<void> {
  const client = new http.HttpClient('download-bitrise-yaml')
  const res = await client.get(
    `https://api.bitrise.io/v0.1/apps/${appSlug}/bitrise.yml`,
    {
      Authorization: bitriseToken
    }
  )
  const body = await res.readBody()
  await fs.promises.writeFile(outputPath, body)
}

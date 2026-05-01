import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const PROGRESS_FILE = resolve(__dirname, 'src/training/progress.json')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'training-progress',
      configureServer(server) {
        server.middlewares.use('/api/progress', (req, res) => {
          res.setHeader('Content-Type', 'application/json')

          if (req.method === 'GET') {
            try {
              const data = readFileSync(PROGRESS_FILE, 'utf-8')
              res.end(data)
            } catch {
              res.end('[]')
            }
            return
          }

          if (req.method === 'POST') {
            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', () => {
              try {
                // Validate JSON before writing
                JSON.parse(body)
                writeFileSync(PROGRESS_FILE, body, 'utf-8')
                res.end('{"ok":true}')
              } catch {
                res.statusCode = 400
                res.end('{"ok":false}')
              }
            })
            return
          }

          res.statusCode = 405
          res.end('{"ok":false}')
        })
      },
    },
  ],
})

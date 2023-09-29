module.exports = {
  apps: [
    {
      name: 'customer-web',
      cwd: './dist/apps/customer-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
      watch: false,
      autorestart: true,
      max_restarts: 5,
    },
  ],
};

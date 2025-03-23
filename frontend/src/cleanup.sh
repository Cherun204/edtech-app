# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Update dependencies
npm outdated
npm update

# # Use yarn (optional)
# npm install -g yarn
# yarn install
# yarn start

# Increase Node.js memory limit (optional)
export NODE_OPTIONS=--max_old_space_size=4096
npm start
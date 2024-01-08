FROM mcr.microsoft.com/devcontainers/javascript-node:20

# nodeのバージョン指定
# ARG EXTRA_NODE_VERSION=20.10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# toolインストール
RUN npm install -g npm@10.2.5
RUN npm install -g npm-check-updates
RUN npm install -g license-report
RUN npm install -g yarn

# RUN npm install

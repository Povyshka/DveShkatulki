FROM node:23

#install ssh and git
RUN apt update && apt install ssh git -y

# copy my rsa
COPY id_rsa /root/.ssh/id_rsa

# chmod rsa
RUN chmod 600 /root/.ssh/id_rsa

# add github.com
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# magic env
ENV GIT_SSH_COMMAND="ssh -i /root/.ssh/id_rsa -o UserKnownHostsFile=/root/.ssh/known_hosts -o StrictHostKeyChecking=no"

# change catalog
WORKDIR /app

# clone repo
RUN git clone git@github.com:Povyshka/DveShkatulki.git

# change catalog
WORKDIR /app/DveShkatulki/client

# install node.js stuff
RUN npm install

#open port
EXPOSE 3000

# start app
CMD ["npm", "start"]
Se você tem Node.js disponível na máquina, instale o weinre para debug remoto em dispositivos genéricos. Útil para navegadores Android antigos, Windows Phone ou iOS se você não tiver um Mac. (você pode instalar o node daqui: http://nodejs.org/)

a) Abra um terminal e instale o weinre com:

npm install -g weinre

No mac: 
sudo npm -g install weinre
b) Ainda no terminal, inicie o weinre:

weinre
ps: caso o comando não seja reconhecido, instale globalmente usando npm install -g weinre

Observe o endereço e a porta que aparecem.

c) Acesse no Chrome Desktop a página do weinre usando seu IP da rede. Algo como http://192.168.xx.xx:8099.

d) Na página do weinre, copie a tag <'script> a ser usada nas páginas. Cole no topo do seu HTML. Acesse a página no seu dispositivo.

e) Na página do weinre, cliquem em "debug client user interface". Aí selecione a aba que quer debugar (fica verde) e vá nas opções de Elements, Console etc para debugar.
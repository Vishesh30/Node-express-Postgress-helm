# Node-express-Postgress-helm
Sample to connect Node with Postgres and deploy using helm


# Prerequisites 
Cluster should be created and running in your local system ( minikube or docker desktop)
Run Below command to configure the cluster

  	• kubectl -n kube-system create serviceaccount tiller

	  • kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
	
	  • helm init --service-account tiller



# Follow below steps to use this repository:-

1) Clone the repository to your local system.
2) Run the below command inside service-chart folder
       • helm install .


# For helm 3 Please follow the below commands

Since helm 3 tiller is being removed and tiller is no loner required.

• Clone the repository from git
• In the git folder / Node-express-Postgress-helm - Execute the following command
	"helm install service-chart --generate-name"
	
• Expected result
	NAME: service-chart-1581162833
	LAST DEPLOYED: Sat Feb 8 17:23:53 2020
	NAMESPACE: default
	STATUS: deployed
	REVISION: 1
	TEST SUITE: None

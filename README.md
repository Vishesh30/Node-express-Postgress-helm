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

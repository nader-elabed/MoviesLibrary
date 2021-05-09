Overview of Movies Library

Spring Boot and Angular form a powerful tandem that works great for developing web applications with a minimal footprint.
In this aplication we can search movies by filter ,add ,update and Delete , we'll use Spring Boot for implementing a RESTful backend, and Angular for creating a frontend.

Our demo web application's functionality will be pretty simplistic indeed. Users will be able to create their movies (or select movies if they already exist in the Json File ).


The Spring Boot Application :

Our demo web application's functionality will be pretty simplistic indeed. It will be just narrowed to retrieving data from a "data/movies.json" file using REST Api services exposed at http://localhost:8080/api/movie. The Api controller contains view, creation, update, search and delete services.


The Angular Application :

With our demo Spring Boot application up and running, the Angular application, capable of consuming the REST controller API.
It is possible de view all data or to use an index to search one object. There is also another service, based on a key-value search criteria. In addition, a delete and update operations are available to modify objects list content. An integrity check is added before every process to control input parameters.



Angular Dependencies

    PrimeNg
    Bootstrap 

Spring Boot Dependencies

    Tomcat Spring Boot
    Gson

Server

    Tomcat

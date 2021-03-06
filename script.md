mvn archetype:generate - generate new maven project

VCS -> Import into version control -> Share project on GitHub

.gitignore
Readme.md

Google -> hello world spring boot app
https://spring.io/guides/gs/spring-boot/

resources -> static -> index.html
resources -> application.yml

packages - controller, service, repository

@RequestMapping("api/users")
@RequestMapping(value = "current", method = RequestMethod.GET)

@GetMapping("current") - alias for @RequestMapping
@PostMapping
@PutMapping
@DeleteMapping

@Controller - expects to return name of view
@RestController - expects to return Object
@ResponseBody - Возвращает из метода объект
Использовать @RestController

Edit configurations -> Single instance only

Jackson
@JsonIgnore - игнорирует поле, не добавляя в JSON

Lombok maven -> dependency
Settings -> Plugins -> Lombok plugin
Settings -> Annotation processors -> Enable Annotation Processing

@Data - добавляет все следующие аннотации
@Getter
@Setter
@EqualsAndHashCode
@ToString

@ToString.Exclude - исключает из реализации
@EqualsAndHashCode.Exclude

@NoArgsConstructor
@AllArgsConstructor

@Builder - удобный конструктор для объекта

@Slf4j - добавляет переменную log (логгер) в класс

@Component - автоматически сканируется спрингом, добавляется как бин
Алиасы:
@Service
@Repository
@Controller

@Autowired - импортирует другой бин в компонент

Google -> spring data jpa hello world
https://spring.io/guides/gs/accessing-data-jpa/

spring data jpa - for SQL databases
spring data mongo db - Mongo
Spring data elasticsearch - Elasticsearch
...

public interface UserRepository extends JpaRepository<User, Long> {
}

JpaRepository -> PagingAndSortingRepository -> CrudRepository

<dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
        </dependency>
        
@Entity - над всеми классами, для которых создается таблица в базе данных
@Id - в каждом Entity классе над полем айди
@GeneratedValue(strategy = GenerationType.IDENTITY) - вешается над айдишкой, показывает как должна быть сгенерирована айдишка


@GetMapping("{user_id}")
public User getUserById(@PathVariable("user_id") Long userId) {

@PostMapping("new")
public User createNewUser(@RequestBody User user) {

@RequestBody - тело запроса
@RequestParam - параметры запроса после ?
@PathVariable - переменная в ссылке

@Table(name = "users") - можно задать имя для таблицы в БД
@Column(name = "user_name") - можно поменять стандартное название колонки в БД    

@JsonProperty(access = JsonProperty.Access.WRITE_ONLY) - принимает поле на вход, не отдает на фронт-енд обратно
@JsonProperty - позволяет задать имя для поля внутри JSON

Открыть доступ к консоли базы данных H2:
application.yml:

spring:
  datasource:
    url: jdbc:h2:mem:final-project-preparation
    username: root
    password:

  h2:
    console:
      enabled: true
      path: /console
      
      
resources -> data.sql

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) - чтобы вылечить ошибку сериализации обертки хибернейта над entity

@JsonIgnoreProperties(ignoreUnknown = false) - кидать ошибку, если в джейсоне пришло неизвестное поле

@MappedSuperclass - родительский класс для нескольких entity

-----

@CreatedDate - автоматически проставляет дату создания сущности
@LastModifiedDate - автоматически проставляет дату при каждом изменении сущности

@CreatedBy
@LastModifiedBy - то же с юзерами

Чтобы оно работало:
@EnableJpaAuditing - добавить на том же классе, где стоит @SpringBootApplication

над классом, где прописаны эти поля:
@EntityListeners(AuditingEntityListener.class)    

-----

@ManyToMany
@OneToMany - вешается над List<...>
@ManyToOne  - вешается над единичным полем

@OneToMany(mappedBy = "owner") - если у нас есть поле owner в связанной сущности

@OneToMany
@JoinColumn(name = "owner_id") - если у нас нет поля owner в связанной сущности

https://www.youtube.com/watch?v=V-ljsrVy6pE - Tuning Hibernate performance

fetchType - вытягивать ли связанные сущности, когда из базы достается родительская
cascade - что делать со связанной сущностью при изменении родительской

-----

https://habr.com/ru/company/piter/blog/343270/ - непрерывная интеграция

Travis CI
https://travis-ci.com/

Add .travis.yml to root

-----

dist: trusty

language: java

jdk:
- oraclejdk8

cache:
  directories:
  - $HOME/.m2

script:
  - mvn clean test
  
-----

Application deployment:
1. npm run build
2. Copy contents of `build` folder to resources -> static
3. mvn clean package
4. Send JAR from /target to remote server
5. Run with java -jar jar-name.jar

-----

package.json -> proxy": "http://localhost:9000"


Questions:
 - Server side rendering
 - Service worker
 - React <-> Backend
 - Connecting MySQL
 - Search bar (React)
 - Filter (React)
 
 
Service worker:
https://developers.google.com/web/fundamentals/primers/service-workers/

Просто о Progressive web application:
https://tuhub.ru/posts/progressive-web-app-with-react

Детальнее:
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-3-offline-support-and-network-resilience-c84db889162c

SSR (Server Side Rendering):
https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38

Вместе с Java:
https://codeburst.io/jsx-react-js-java-server-side-rendering-ssr-2018-cf3aaff7969d

-----------------
25.02.2019

Spring profiles:

1) application-dev.yml - configuration for profile "dev"

--- (divides profiles inside application.yml)


spring:
  profiles:
    active: local
    
    

---

spring:
  profiles: local

  datasource:
    url: jdbc:h2:mem:final-project-preparation
    username: root
    password:
    driver-class-name: org.h2.Driver

  h2:
    console:
      enabled: true
      path: /console

---

spring:
  profiles: dev

  datasource:
    url: jdbc:mysql://danit.cukm9c6zpjo8.us-west-2.rds.amazonaws.com:3306/fs5
    username: fs5_user
    password: bArceloNa

---

spring:
  profiles: prod
  
  
-------------------------

Run -> Edit configurations -> VM Options -> 
-Dspring.profiles.active=dev

https://www.google.com/search?q=mysql+connector+java+maven&oq=mysql+connector+java+maven&aqs=chrome..69i57j0l5.5417j0j7&sourceid=chrome&ie=UTF-8
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.15</version>
</dependency>



  jpa:
    hibernate:
      ddl-auto:
      

https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html
You can set spring.jpa.hibernate.ddl-auto explicitly and the standard Hibernate property values are none, validate, update, create, and create-drop. Spring Boot chooses a default value for you based on whether it thinks your database is embedded. It defaults to create-drop if no schema manager has been detected or none in all other cases. An embedded database is detected by looking at the Connection type. hsqldb, h2, and derby are embedded, and others are not. Be careful when switching from in-memory to a ‘real’ database that you do not make assumptions about the existence of the tables and data in the new platform. You either have to set ddl-auto explicitly or use one of the other mechanisms to initialize the database.


**How to run data.sql with MySQL?**
    data: classpath*:data.sql
    

React Router:
npm i react-router-dom

Redux:
npm i redux react-redux

<Provider store={store}>
  <App/>
</Provider>

https://reactjs.org/docs/refs-and-the-dom.html


Access store variables in action creators
https://habr.com/ru/post/314582/
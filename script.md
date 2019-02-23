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
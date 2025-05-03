
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-[#2D1E0F]/90 backdrop-blur-md text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Coffee" size={24} />
            <span className="text-xl font-bold">АстроКофе</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#menu" className="hover:text-[#D6A26D] transition-colors">Меню</a>
            <a href="#locations" className="hover:text-[#D6A26D] transition-colors">Локации</a>
            <a href="#contacts" className="hover:text-[#D6A26D] transition-colors">Контакты</a>
            <a href="#booking" className="hover:text-[#D6A26D] transition-colors">Бронирование</a>
          </div>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-[#D6A26D] hover:text-white hover:border-transparent">
            Заказать онлайн
          </Button>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">АстроКофе</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Космическое удовольствие в каждой чашке</p>
          <Button className="bg-[#D6A26D] hover:bg-[#AA7F53] text-white px-8 py-6 rounded-full text-lg">
            Забронировать столик
          </Button>
        </div>
      </section>

      {/* Секция меню */}
      <section id="menu" className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#2D1E0F]">Наше меню</h2>
          
          <Tabs defaultValue="coffee" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-10">
              <TabsTrigger value="coffee">Кофе</TabsTrigger>
              <TabsTrigger value="desserts">Десерты</TabsTrigger>
              <TabsTrigger value="breakfast">Завтраки</TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Капучино", 
                  price: "270 ₽", 
                  desc: "Эспрессо с молочной пенкой",
                  image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                },
                { 
                  name: "Латте", 
                  price: "290 ₽", 
                  desc: "Эспрессо с большим количеством молока",
                  image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                },
                { 
                  name: "Американо", 
                  price: "180 ₽", 
                  desc: "Эспрессо с добавлением горячей воды",
                  image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                { 
                  name: "Фильтр-кофе", 
                  price: "230 ₽", 
                  desc: "Свежезаваренный кофе альтернативным способом",
                  image: "https://images.unsplash.com/photo-1553742198-6eea5ac42a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                }
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#2D1E0F]">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-[#D6A26D]">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="desserts" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Чизкейк", price: "350 ₽", desc: "Классический нью-йоркский чизкейк" },
                { name: "Тирамису", price: "320 ₽", desc: "Итальянский десерт с маскарпоне" },
                { name: "Морковный торт", price: "290 ₽", desc: "С нежным кремом и грецкими орехами" },
                { name: "Шоколадный фондан", price: "390 ₽", desc: "С жидкой шоколадной начинкой" }
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#2D1E0F]">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-[#D6A26D]">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="breakfast" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Авокадо-тост", price: "420 ₽", desc: "На зерновом хлебе с яйцом пашот" },
                { name: "Омлет", price: "350 ₽", desc: "С овощами и сыром" },
                { name: "Сырники", price: "320 ₽", desc: "Со сметаной и ягодным соусом" },
                { name: "Гранола", price: "290 ₽", desc: "С йогуртом и свежими фруктами" }
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#2D1E0F]">{item.name}</h3>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <span className="font-bold text-[#D6A26D]">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Секция локаций */}
      <section id="locations" className="py-20 px-4 md:px-8 bg-[#F5F0E8]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#2D1E0F]">Наши локации</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "АстроКофе на Невском",
                address: "Невский пр., 78",
                hours: "08:00 - 22:00",
                image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                name: "АстроКофе в Галерее",
                address: "ТЦ Галерея, 3 этаж",
                hours: "10:00 - 22:00",
                image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              },
              {
                name: "АстроКофе на Московской",
                address: "Московский пр., 142",
                hours: "07:00 - 23:00",
                image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              }
            ].map((location, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${location.image})` }}
                ></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2D1E0F]">{location.name}</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-[#D6A26D]" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-[#D6A26D]" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full border-[#D6A26D] text-[#D6A26D] hover:bg-[#D6A26D] hover:text-white">
                    Проложить маршрут
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция контактов и бронирования */}
      <section id="contacts" className="relative py-20 px-4 md:px-8 bg-[#2D1E0F] text-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-10">Контакты</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-[#D6A26D]" />
                <div>
                  <h3 className="text-lg font-bold">Телефон</h3>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-[#D6A26D]" />
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p>info@astrocoffee.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-[#D6A26D]" />
                <div>
                  <h3 className="text-lg font-bold">Время работы</h3>
                  <p>Пн-Пт: 7:00 - 22:00</p>
                  <p>Сб-Вс: 8:00 - 23:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4">Следите за нами</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-[#D6A26D] hover:bg-[#AA7F53] transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-[#D6A26D] hover:bg-[#AA7F53] transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-[#D6A26D] hover:bg-[#AA7F53] transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div id="booking">
            <h2 className="text-4xl font-bold mb-10">Бронирование столика</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Имя</label>
                  <Input id="name" className="bg-white/10 border-white/20 text-white" placeholder="Ваше имя" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Телефон</label>
                  <Input id="phone" className="bg-white/10 border-white/20 text-white" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block mb-2">Дата</label>
                  <Input id="date" type="date" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <label htmlFor="time" className="block mb-2">Время</label>
                  <Input id="time" type="time" className="bg-white/10 border-white/20 text-white" />
                </div>
              </div>
              
              <div>
                <label htmlFor="guests" className="block mb-2">Количество гостей</label>
                <Input id="guests" type="number" min="1" className="bg-white/10 border-white/20 text-white" defaultValue="2" />
              </div>
              
              <div>
                <label htmlFor="comments" className="block mb-2">Комментарии</label>
                <Textarea id="comments" className="bg-white/10 border-white/20 text-white" placeholder="Особые пожелания" />
              </div>
              
              <Button className="w-full bg-[#D6A26D] hover:bg-[#AA7F53] text-white">
                Забронировать столик
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A140C] text-white/70 py-8 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Icon name="Coffee" size={20} />
            <span className="text-lg font-bold text-white">АстроКофе</span>
          </div>
          <div className="text-sm">
            © 2025 АстроКофе. Все права защищены. Космическое удовольствие в каждой чашке!
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

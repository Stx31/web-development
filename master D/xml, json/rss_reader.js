$(document).ready(function() {
    // URL del script PHP en tu servidor que hace la solicitud al RSS
    var proxyURL = "https://tudominio.com/proxy.php";

    // Llama al script PHP utilizando AJAX
    $.ajax({
        url: proxyURL,
        type: "GET",
        dataType: "xml",
        success: function(xml) {
            // Procesa el XML para obtener las últimas tres noticias
            $(xml).find("item").each(function(index) {
                if (index < 3) {
                    var title = $(this).find("title").text();
                    var link = $(this).find("link").text();
                    var description = $(this).find("description").text();
                    
                    // Construye el HTML para cada noticia
                    var newsItem = "<div class='newsItem'>";
                    newsItem += "<h3><a href='" + link + "'>" + title + "</a></h3>";
                    newsItem += "<p>" + description + "</p>";
                    newsItem += "</div>";

                    // Agrega la noticia al div rssFeed
                    $("#rssFeed").append(newsItem);
                }
            });
        },
        error: function(xhr, status, error) {
            console.error("Error al cargar el RSS: " + status + " - " + error);
        }
    });
});

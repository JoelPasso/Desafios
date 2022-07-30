package me.dio.soccernews.date.remote;

import java.util.List;

import me.dio.soccernews.domain.News;
import retrofit2.Call;
import retrofit2.http.GET;

public interface SoccerBiosApi {
    @GET("news.json")
    Call<List<News>> getNews();
}

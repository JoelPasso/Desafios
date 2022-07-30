package me.dio.soccernews.ui.news;

import android.app.Application;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;
import androidx.room.Room;

import java.util.List;

import me.dio.soccernews.date.remote.SoccerBiosApi;
import me.dio.soccernews.domain.News;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

;
public class NewsViewModel extends ViewModel {

    private final MutableLiveData<List<News>> news  = new MutableLiveData<>();
    private final SoccerBiosApi api;


    public NewsViewModel() {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("https://joelpasso.github.io/news/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        api = retrofit.create(SoccerBiosApi.class);

        this.findnews();
    }

    private void findnews() {
        api.getNews().enqueue(new Callback<List<News>>() {
            @Override
            public void onResponse(Call<List<News>> call, Response<List<News>> response) {
                if(response.isSuccessful()){
                    news.setValue(response.body());
                } else {
                    
                }
            }

            @Override
            public void onFailure(Call<List<News>> call, Throwable t) {

            }
        });
    }

    public LiveData<List<News>> getNews() {
        return this.news;
    }
}
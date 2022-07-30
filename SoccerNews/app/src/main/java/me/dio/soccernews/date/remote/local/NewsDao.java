package me.dio.soccernews.date.remote.local;

import androidx.room.Dao;
import androidx.room.Query;

import java.util.List;

import me.dio.soccernews.domain.News;

@Dao
public interface NewsDao {
    @Query("SELECT * FROM news WHERE favorite = :favorite")
    List<News> loadFavoriteNews(boolean favorite);
}

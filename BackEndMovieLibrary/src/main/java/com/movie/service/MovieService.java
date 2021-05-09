package com.movie.service;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.movie.model.Movie;


@Service
public class MovieService {
@Autowired
private Gson gson;

private String fileName="data/movies.json";
	
	public List<Movie>  getAllMovies() throws IOException {
		
		 gson = new Gson();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource), List.class);
		
		return data;	
		
	}
	
	public Movie getMovie(int index ) throws IOException {
		
		 gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		Movie[] data = gson.fromJson(new FileReader(resource),  Movie[].class);
		
		return data[index];		
	}
	
	public void deleteMovie(int index ) throws IOException {
		
		 gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
		
		data.remove(index);
		FileWriter fw = new FileWriter(resource);
        
		gson.toJson(data, fw);
		fw.flush();
        fw.close();
	}
	
	   public Movie updateMovie( int index , Movie movie) throws IOException, ParseException {
			
			
			 gson = new GsonBuilder().create();
			File resource = new ClassPathResource(
					this.fileName).getFile();
			List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
			
			data.set(index, movie);
			FileWriter fw = new FileWriter(resource);
	        
			gson.toJson(data, fw);
	        fw.close();
			return movie;
			
		}
	   
	  public  List<Movie> searchMovie( Movie movie) throws IOException {		
			 gson = new GsonBuilder().create();
			File resource = new ClassPathResource(
					this.fileName).getFile();
			Movie[] data = gson.fromJson(new FileReader(resource),  Movie[].class);		
			List<Movie> dataNew = new ArrayList<Movie>();
			for(Movie m : data)
			{
				if(m.equals(movie))
				{
					dataNew.add(m);
				}
			}
			return dataNew;
			
		}
	  
	  public Movie newMovie( Movie movie) throws IOException {
			
			
			 gson = new GsonBuilder().setPrettyPrinting().create();
			File resource = new ClassPathResource(
					this.fileName).getFile();
			List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
			
			data.add(movie);
			//gson.toJson(data, new FileWriter(jsonOutput));
			FileWriter fw = new FileWriter(resource);
	        
			gson.toJson(data, fw);
		
	        fw.close();
			return movie;
			
		}


}

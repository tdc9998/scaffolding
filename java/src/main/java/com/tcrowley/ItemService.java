package com.tcrowley;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class ItemService {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Item> getSelectedItems(String name) {
		try {
			String query = "select * from items where name= ?";
			List<Item> items = jdbcTemplate.query(query, new Object[] {name}, new ItemRowMapper());
			return items;
		} catch(Exception e) {
			return null;
		}
	}
	
	public static final class ItemRowMapper implements RowMapper<Item> {

		@Override
		public Item mapRow(ResultSet rs, int idx) throws SQLException {
			Item i = new Item();
			i.setId(rs.getInt("id"));
			i.setName(rs.getString("name"));
			i.setDescription(rs.getString("description"));
			return i;
		}
		
	}
}
